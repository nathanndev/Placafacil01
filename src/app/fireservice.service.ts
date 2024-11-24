import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

// Interface para login/signup
interface AuthData {
  email: string;
  password: string;
}

// Interface para dados do usuário no Firestore
interface UserDetails {
  uid: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {}

  loginWithEmail(data: AuthData) {
    return signInWithEmailAndPassword(this.auth, data.email, data.password);
  }

  signup(data: AuthData) {
    return createUserWithEmailAndPassword(this.auth, data.email, data.password);
  }

  saveDetails(data: UserDetails) {
    const userDoc = doc(this.firestore, `users/${data.uid}`);
    return setDoc(userDoc, data);
  }
}
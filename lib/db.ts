import { db } from './firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import type { UserProfile } from './types';

export async function createUserProfile(uid: string, email: string) {
  const userRef = doc(db, 'users', uid);
  const profile: UserProfile = {
    uid,
    email,
    createdAt: new Date(),
    lastLogin: new Date()
  };
  
  await setDoc(userRef, profile);
  return profile;
}

export async function getUserProfile(uid: string) {
  const userRef = doc(db, 'users', uid);
  const snapshot = await getDoc(userRef);
  return snapshot.data() as UserProfile;
}

export async function updateUserProfile(uid: string, data: Partial<UserProfile>) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, data);
}
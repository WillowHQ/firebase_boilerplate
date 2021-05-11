import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useCollection } from 'react-firebase-hooks/firestore';


export default function Home() {
  const [value, loading, error] = useCollection(
    db.collection('forms').doc(fid).collection("members"),
    {
        snapshotListenOptions: { includeMetadataChanges: true},  
    }
)
  return (
    <div className={styles.container}>
      <SignIn/>
    </div>
  )
}

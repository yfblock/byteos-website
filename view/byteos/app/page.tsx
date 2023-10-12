"use client";

import Image from 'next/image'
import styles from './page.module.css'
import {sums} from "wasm";
import {useState} from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <main className={styles.main}>
      <div>{counter}</div>
      <a onClick={() => setCounter(counter + 1)}> + 1</a>
    </main>
  )
}

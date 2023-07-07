import Link from 'next/link';
import { FC } from 'react';

const HomeButton: FC = () => {
  return (
    <Link href="/">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/back.png" alt="back"/>
    </Link>
  );
}

export default HomeButton;

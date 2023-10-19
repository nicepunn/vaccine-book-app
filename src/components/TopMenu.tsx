import Link from 'next/link'
import TopMenuItem from './TopMenuItem'
import styles from './topmenu.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {

    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>

            {
				session?
				<Link href="api/auth/signout">
					<div className='flex items-center absolute left-0 h-full px-2'>
						Sign-out of {session.user?.name}</div>
				</Link>
				:
				<Link href="api/auth/signin">
					<div className='flex items-center absolute left-0 h-full px-2'>
						Sign-in</div>
				</Link>
			}

            <Link href='/'>
                <Image src='/img/bottle.jpg' className={styles.logoimg} 
                alt='logo' width={100} height={100} sizes='100vh'/>
            </Link>
            <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
    )
}
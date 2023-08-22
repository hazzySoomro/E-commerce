import React from 'react';
import Container from '../Container';
import FooterList from './FooterList';
import Link from 'next/link';
import { MdFacebook } from 'react-icons/md';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';

function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-6">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="/">Phones</Link>
            <Link href="/">Laptops</Link>
            <Link href="/">Desktops</Link>
            <Link href="/">Watches</Link>
            <Link href="/">TVs</Link>
            <Link href="/">Accessores</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="/">Contact Us</Link>
            <Link href="/">Shipping Policy</Link>
            <Link href="/">Returns & Exchanges</Link>
            <Link href="/">Watches</Link>
            <Link href="/">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
              voluptatum, autem neque a ipsa accusamus laudantium. Nam impedit
              illo consequatur recusandae a quia obcaecati, dicta delectus
              aliquam modi vero.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Hassaan Ali. All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="/">
                <MdFacebook size={24} />
              </Link>
              <Link href="/">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="/">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="/">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
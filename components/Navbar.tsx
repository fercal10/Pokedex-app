"use client"

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";


export const Navbar = () => {


	return (
		<NextUINavbar maxWidth="xl" position="sticky">


			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full justify-around"

			>
				<NavbarItem className="">
					<Link className="hover:text-white text-2xl font-bold hover:scale-110" href='/'>

						<h3>Pokemon</h3>
					</Link>
				</NavbarItem>


				<NavbarItem className="hidden sm:flex gap-2">

					<ThemeSwitch />
				</NavbarItem>

			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarItem className="">
					<Link href='/'>
						<h3>Pokemon</h3>
					</Link>
				</NavbarItem>

				<ThemeSwitch />
			</NavbarContent>


		</NextUINavbar>
	);
};

"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
  User,
} from "@nextui-org/react";
import useDarkTheme from "@/app/hooks/useDarkTheme";
import { SunIcon } from "../icon/SunIcon";
import { MoonIcon } from "../icon/MoonIcon";
import Link from "next/link";

const menu = [
  {
    name: "Feature",
  },
  {
    name: "Pricing",
  },
  {
    name: "Feature",
  },
  {
    name: "Pricing",
  },
];

export const Header = () => {
  const { darkTheme, setDarkTheme } = useDarkTheme();

  return (
    <Navbar className="flex items-center max-w-full w-100" maxWidth="2xl">
      <NavbarBrand>
        <div className="ml-4 flex items-center">BANKING</div>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-20 min-w-80"
        justify="center"
      >
        {menu.map((item, index) => (
          <NavbarItem key={`header_item_${index}`}>
            <Link color="foreground" href="#">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Switch
          isSelected={darkTheme}
          onValueChange={() => setDarkTheme(!darkTheme)}
          size="lg"
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonIcon className={className} />
            ) : (
              <SunIcon className={className} />
            )
          }
        ></Switch>
        <Dropdown>
          <DropdownTrigger>
            <User
              className="cursor-pointer"
              name="Truong_NT"
              description="User"
              avatarProps={{
                src: "https://i.pravatar.cc/150",
              }}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" disabledKeys={[""]}>
            <DropdownItem key="account" textValue="Account">
              Account
            </DropdownItem>
            <DropdownItem
              key="logout"
              className="text-danger"
              color="danger"
              textValue="Account"
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

import React from "react";
import Link from "next/link";
import { formData } from "../data/form";
import { Button } from "antd";

export default function Navbar() {
  return (
    <nav>
      {formData.map((item, index) => (
        <Button type="link" key={item.path}>
          <Link href={"/" + item.path}>
            <a>{item.titleform}</a>
          </Link>
        </Button>
      ))}
    </nav>
  );
}

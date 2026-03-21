import React from "react";

type CommonProps = {
  classBtn?: string;
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "link";
};

type LinkButtonProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkButtonProps(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export default function Button(props: ButtonProps) {
  const { classBtn, children, size = "sm", variant = "solid" } = props;

  const customClass = classBtn !== undefined ? classBtn : "";

  let variantClass = "";

  if (variant === "solid") {
    variantClass = "btn";
  } else if (variant === "outline") {
    variantClass = "outline btn";
  } else {
    variantClass = "link";
  }

  const computedClassName = [variantClass, customClass, size].filter(Boolean).join(" ");

  if (isLinkButtonProps(props)) {
    const {
      href,
      classBtn: _classBtn,
      children: _children,
      size: _size,
      variant: _variant,
      ...anchorProps
    } = props;

    return (
      <a className={computedClassName} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    classBtn: _classBtn,
    children: _children,
    size: _size,
    variant: _variant,
    ...buttonProps
  } = props;

  return (
    <button className={computedClassName} {...buttonProps}>
      {children}
    </button>
  );
}

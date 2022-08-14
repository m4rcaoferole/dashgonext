import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
  shouldMatchExcatHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExcatHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExcatHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExcatHref &&
    (asPath.startsWith(String(rest.href)) || 
    asPath.startsWith(String(rest.as)))) {
      isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}

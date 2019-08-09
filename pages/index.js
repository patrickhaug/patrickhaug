import React from "react";
import Logo from "../components/Logo";
import { Wrapper } from "../components/Wrapper";
import {FadeLink} from '../components/FadeLink';

export default function Index() {
  return (
    <Wrapper>
    <Logo />
    <div>
      <FadeLink href="https://twitter.com/patrickhaug" delay={3}>
        twitter
      </FadeLink>
      <FadeLink href="http://github.com/patrickhaug" delay={3.5}>
        github
      </FadeLink>
    </div>
  </Wrapper>
  )
}

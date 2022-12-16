
import { ParallaxProvider } from 'react-scroll-parallax';

function Component() {
    const parallax = useParallax({
      speed: -10,
    });
    return <div ref={parallax.ref} />;
  }
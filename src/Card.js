/** @jsx jsx */
import { jsx } from 'theme-ui';
import themeAutoSize from './themeAutoSize';

const Card = () => (  
  <div
    sx={{
      maxWidth: 800,
      mx: 'auto'
    }}
    >
    <div
      sx={{
        backgroundColor: 'foreground',
        marginTop: themeAutoSize.spacers.loose,
        padding: themeAutoSize.spacers.loose,
        mx: themeAutoSize.spacers.loose
      }}
    > 
      <h3
        sx={{
          fontFamily: 'heading',
          fontWeight: 'heading',
          fontSize: themeAutoSize.heading.h3,
          margin: themeAutoSize.spacers.flush
        }}
      >
      This Card is automatically responding to breakpoints.
      </h3>
      <p
        sx={{
          fontSize: themeAutoSize.text.b1,
        }}    
      > Dark mode UI design for a website is one of the most popular web design trends in 2020. Here we gathered one of the most captivating examples of dark mode design
      for websites and app interfaces from all over the web. For more dark theme website templates.
      </p>
      <div
        sx={{
          borderRadius: 1,
          backgroundColor: 'primary',
          fontSize: themeAutoSize.text.b2,
          px: themeAutoSize.spacers.loosest,
          py: themeAutoSize.spacers.tighter,
          display: 'inline-block',
          color: 'white'
        }}
      >
        Touch Me!
      </div>
    </div>
  </div>
);

export default Card;
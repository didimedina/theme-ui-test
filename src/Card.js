/** @jsx jsx */
import { jsx } from 'theme-ui';
import Container from './Container'
import { heading, text, corner, spacer } from './theme';

const Card = () => (  
  <Container>
      <div
        sx={{
          backgroundColor: 'foreground',
          padding: spacer.loose,
          mx: spacer.loose,
          borderRadius: corner.smoother

        }}
      > 
        <h3
          sx={{
            fontFamily: 'heading',
            fontWeight: 'heading',
            fontSize: heading.h3,
            margin: spacer.flush
          }}
        >
        This Card is automatically responding to breakpoints.
        </h3>
        <p
          sx={{
            fontSize: text.b1,
          }}    
        > Dark mode UI design for a website is one of the most popular web design trends in 2020. Here we gathered one of the most captivating examples of dark mode design
        for websites and app interfaces from all over the web. For more dark theme website templates.
        </p>
        <button
          sx={{
            border: 0,
            outline: 'none',
            marginTop: spacer.tight,
            borderRadius: corner.smooth,
            backgroundColor: 'primary',
            fontSize: text.b3,
            px: spacer.normal,
            py: spacer.tighter,
            display: 'block',
            // width: 180,
            color: 'white',
            marginRight: spacer.tight
          }}
        >
          Really Really Long Button!
        </button>
        <button
          sx={{
            border: 0,
            outline: 'none',
            marginTop: spacer.tight,
            borderRadius: corner.smooth,
            backgroundColor: 'primary',
            fontSize: text.b2,
            px: spacer.normal,
            py: spacer.tighter,
            display: 'block',
            // width: 180,
            color: 'white',
            marginRight: spacer.tight
          }}
        >
          Button
        </button>
        <button
          sx={{
            border: 0,
            outline: 'none',
            marginTop: spacer.tight,
            borderRadius: corner.smooth,
            backgroundColor: 'primary',
            fontSize: text.b2,
            px: spacer.loose,
            py: spacer.tight,
            display: 'block',
            // width: 180,
            color: 'white'
          }}
        >
          Button
        </button>
        <button
          sx={{
            border: 0,
            outline: 'none',
            marginTop: spacer.tight,
            borderRadius: corner.smooth,
            backgroundColor: 'primary',
            fontSize: text.b1,
            px: spacer.loose,
            py: spacer.tight,
            display: 'block',
            // width: 180,
            color: 'white'
          }}
        >
          Button
        </button>
      </div>
    </Container>
);

export default Card;
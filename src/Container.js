/** @jsx jsx */
import { jsx } from 'theme-ui';
import { spacer } from './theme';


const Container = (props) => {
    const {children} = props;
    return (
    <div
      sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 800,
          marginTop: spacer.loose
        }}
    >
        {children}
    </div>

)
    }

export default Container;
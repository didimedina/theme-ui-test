/** @jsx jsx */
import { jsx } from 'theme-ui';
import themeAutoSize from './themeAutoSize';

const Container = (props) => {
    const {children} = props;
    return (
    <div
      sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 800,
          marginTop: themeAutoSize.spacer.loose
        }}
    >
        {children}
    </div>

)
    }

export default Container;
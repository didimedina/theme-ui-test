/** @jsx jsx */
import { jsx } from 'theme-ui';
import themeAutoSize from './themeAutoSize';

const Container = () => (
    <div
        sx={{
            
            backgroundColor: 'foreground',
            marginTop: themeAutoSize.spacers.loose,
            padding: themeAutoSize.spacers.loose,
            maxWidth: 1000,
            mx: 'auto',
            width: '100%',
        }}
    >
    </div>

);

export default Container;
import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Arun Jadaun. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          Built with{' '}
          <Link href="https://reactjs.org/" color="inherit" target="_blank" rel="noopener">
            React
          </Link>
          {' & '}
          <Link href="https://mui.com/" color="inherit" target="_blank" rel="noopener">
            Material-UI
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Hi, I'm Arun Jadaun
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Software Developer | AR Enthusiast | Cloud Practitioner
            </Typography>
            <Typography variant="body1" paragraph>
              Problem Solver | Passionate about building scalable applications and immersive AR solutions
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/resume.pdf"
              target="_blank"
              sx={{ mt: 2 }}
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            <Avatar
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                bgcolor: 'primary.main',
              }}
              alt="Arun Jadaun"
              src="/src/assets/id pic.png"
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 
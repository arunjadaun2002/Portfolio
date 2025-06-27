import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = {
    email: 'arunjadaun2002@gmail.com',
    phone: '+91-7088034064',
    linkedin: 'linkedin.com/in/arun-jadaun',
    github: 'github.com/arunjadaun2002',
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Contact Me
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                elevation={2}
                sx={{ p: 4 }}
              >
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Link href={`mailto:${contactInfo.email}`} color="inherit" underline="hover">
                    {contactInfo.email}
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Link href={`tel:${contactInfo.phone}`} color="inherit" underline="hover">
                    {contactInfo.phone}
                  </Link>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                elevation={2}
                sx={{ p: 4 }}
              >
                <Typography variant="h5" gutterBottom>
                  Social Links
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton
                    component={Link}
                    href={`https://${contactInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    size="large"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href={`https://${contactInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    size="large"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 
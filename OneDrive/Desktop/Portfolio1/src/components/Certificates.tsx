import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      title: 'Complete Interview Preparation (C++)',
      issuer: 'GeeksforGeeks',
      date: 'Mar 2023',
    },
    {
      title: 'Database Management Systems Core Concepts',
      issuer: 'Udemy',
      date: 'Jan 2023',
    },
    {
      title: 'HackerRank Basic Programming Certification',
      issuer: 'HackerRank',
      date: 'Jan 2024',
    },
  ];

  const achievements = [
    'Solved 550+ DSA problems on platforms like LeetCode & GFG',
    'Ranked 50th in a GeeksforGeeks coding contest',
    "Dean's List (Top 10%) at Lovely Professional University",
  ];

  return (
    <Box
      id="certificates"
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
            Certificates & Achievements
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Certificates
              </Typography>
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ mb: 2 }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <WorkspacePremiumIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {cert.title}
                      </Typography>
                      <Typography color="textSecondary">
                        {cert.issuer} • {cert.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Achievements
              </Typography>
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ mb: 2 }}
                >
                  <CardContent>
                    <Typography variant="body1">{achievement}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certificates; 
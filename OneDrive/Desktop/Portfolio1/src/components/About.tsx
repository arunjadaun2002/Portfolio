import SchoolIcon from '@mui/icons-material/School';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science & Engineering',
      period: 'Aug 2021 – Aug 2025',
      location: 'Punjab, India',
    },
    {
      institution: 'Kids Corner Happy School',
      degree: 'Intermediate (12th)',
      period: '2020–2021',
      score: '74%',
    },
    {
      institution: 'Kids Corner Happy School',
      degree: 'Matriculation (10th)',
      period: '2018–2019',
      score: '72%',
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
            About Me
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Education
              </Typography>
              {education.map((edu, index) => (
                <Paper
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  elevation={2}
                  sx={{ p: 3, mb: 2 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <SchoolIcon color="primary" />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {edu.institution}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {edu.period}
                      </Typography>
                      {edu.location && (
                        <Typography variant="body2" color="textSecondary">
                          {edu.location}
                        </Typography>
                      )}
                      {edu.score && (
                        <Typography variant="body2" color="textSecondary">
                          Score: {edu.score}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 
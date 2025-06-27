import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C++', 'JavaScript', 'C', 'Kotlin'],
    },
    {
      category: 'Frameworks/Technologies',
      skills: ['React', 'SQL', 'HTML', 'CSS'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['AWS', 'Git', 'MySQL', 'Unity', 'VS Code'],
    },
    {
      category: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'OOP', 'Agile Development', 'Debugging'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Teamwork', 'Adaptability'],
    },
  ];

  return (
    <Box
      id="skills"
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
            Skills
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  elevation={2}
                  sx={{ p: 3 }}
                >
                  <Typography variant="h5" gutterBottom color="primary">
                    {category.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        color="primary"
                        variant="outlined"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Markerless Home Design AR App – ScrollAR4U',
      description: 'Developed an AR app to visualize wall colors in real time.',
      techStack: ['Unity', 'ARKit/ARCore'],
      year: '2025',
    },
    {
      title: 'Currency Exchange App',
      description: 'Real-time currency converter using API for exchange rates.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      year: '2024',
    },
    {
      title: 'Online Test Platform',
      description: 'Built a platform for online assessments with MCQs, result tracking, and time-bound testing.',
      techStack: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'FlyPrep – GD & Interview Practice Portal',
      description: 'Designed an application to help students practice mock group discussions and interviews. Features included scheduling, practice room joining, and role-based access.',
      techStack: ['JavaScript', 'Firebase', 'WebRTC'],
    },
    {
      title: 'AWS Resource Report Automation',
      description: 'Automated generation of AWS usage reports, saving hours of manual work weekly.',
      techStack: ['CloudWatch', 'Lambda', 'Python'],
    },
  ];

  return (
    <Box
      id="projects"
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
            Projects
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  elevation={2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    {project.year && (
                      <Typography color="textSecondary" gutterBottom>
                        {project.year}
                      </Typography>
                    )}
                    <Typography variant="body1" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {project.techStack.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 
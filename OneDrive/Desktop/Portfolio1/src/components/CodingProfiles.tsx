import CodeIcon from '@mui/icons-material/Code';
import { Box, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LeetCodeImage from '../assets/leetcode detail.png'; // Adjust path if needed

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      description: 'Solved 300+ DSA problems',
      link: 'https://leetcode.com/arunjadaun/', // 🔁 Replace with your actual username
      image: LeetCodeImage, // Optional image field
    },
    {
      platform: 'GeeksforGeeks',
      description: 'Active problem solver and contest participant',
      link: 'https://auth.geeksforgeeks.org/user/arunjadaun/', // 🔁 Replace with your actual username
    },
  ];

  return (
    <Box
      id="coding-profiles"
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
            Coding Profiles
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {profiles.map((profile, index) => (
              <Grid item xs={12} md={6} key={index}>
                {profile.platform === 'LeetCode' ? (
                  <>
                    {/* LeetCode Profile Card */}
                    <Card
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      sx={{
                        minWidth: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                        mb: 2,
                      }}
                    >
                      <CardContent>
                        <CodeIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                        <Typography variant="h5" component="h3" gutterBottom>
                          {profile.platform}
                        </Typography>
                        <Typography color="textSecondary" paragraph>
                          {profile.description}
                        </Typography>
                        <Link
                          href={profile.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          color="primary"
                          underline="hover"
                        >
                          View Profile
                        </Link>
                      </CardContent>
                    </Card>
                    {/* LeetCode Image Card */}
                    <Card
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2,
                        boxShadow: 3,
                      }}
                    >
                      <img
                        src={profile.image}
                        alt={`${profile.platform} profile`}
                        style={{
                          width: 250,
                          height: 250,
                          borderRadius: '24px',
                          objectFit: 'cover',
                        }}
                      />
                    </Card>
                  </>
                ) : (
                  <Card
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
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
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <CodeIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                      <Typography variant="h5" component="h3" gutterBottom>
                        {profile.platform}
                      </Typography>
                      <Typography color="textSecondary" paragraph>
                        {profile.description}
                      </Typography>
                      <Link
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        underline="hover"
                      >
                        View Profile
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CodingProfiles;

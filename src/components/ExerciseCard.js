import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          borderRadius: '20px',
          padding: '20px',
          background: '#fff',
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.03)' }
        }}
      >
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          style={{ width: '100%', borderRadius: '12px' }}
        />

        <Stack direction="row" spacing={1} mt={2} px={1}>
          <Button
            sx={{
              background: '#FFA9A9',
              color: '#fff',
              fontSize: '14px',
              borderRadius: '20px',
              textTransform: 'capitalize',
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              background: '#FCC757',
              color: '#fff',
              fontSize: '14px',
              borderRadius: '20px',
              textTransform: 'capitalize',
            }}
          >
            {exercise.target}
          </Button>
        </Stack>

        <Typography
          mt={2}
          px={1}
          pb={1}
          fontWeight="bold"
          fontSize={{ lg: '24px', xs: '20px' }}
          color="#000"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ExerciseCard;


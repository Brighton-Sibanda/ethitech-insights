import React from 'react';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const DefineEthics = () => {
    return (
        <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>Welcome to Ethics in Technology</Typography>
      <Card style={{ margin: '20px 0', padding: 20 }}>
        <CardContent>
          <Typography variant="h6">Introduction</Typography>
          <Typography paragraph>
            "Ethics" has become an urgent topic in the technology industry, touching everything from AI ethics to robotics, and virtual reality. But what is ethics? And why focus on it in technology? This guide offers a quick orientation to stimulate deeper discussions and address common misconceptions.
          </Typography>
          <Typography variant="h6">What Ethics Is Not:</Typography>
          <Typography paragraph>
            Ethics is not a set of fixed rules, a purely negative frame, nor is it synonymous with legal compliance or subjective morals. It's not about religious beliefs, etiquette, or uncritical obedience to authority.
          </Typography>
          <Typography variant="h6">What Ethics Is:</Typography>
          <Typography paragraph>
            It involves promoting human flourishing, respecting dignity, living with integrity, and developing moral wisdom and trustworthy character. Ethics is about skilled moral perception and judgment.
          </Typography>
          <Typography variant="h6">Why Tech Ethics?</Typography>
          <Typography paragraph>
            As technology increasingly shapes our lives, ethical considerations are critical. Tech ethics addresses transparency, bias, data rights, manipulation, and more—highlighting the need for ethical tech practice.
          </Typography>
          <Link to="/">
            <Button variant="contained" color="primary">Explore More</Button>
          </Link>
        </CardContent>
      </Card>
      <Card style={{ margin: '20px 0', padding: 20 }}>
        <CardContent>
          <Typography variant="h6">Growing Concerns in Technology Ethics</Typography>
          <Typography paragraph>
            The digital age has amplified our capabilities but also ethical risks—declining transparency, rising algorithmic bias, the surveillance society, and impacts on labor and the environment are pressing issues.
          </Typography>
          <Typography variant="h6">Cultivating Ethics in Tech Practice</Typography>
          <Typography paragraph>
            Developing ethical skills in technology design and engineering is key to addressing these challenges. This platform offers tools and resources to integrate ethics into tech practices effectively.
          </Typography>
          <Typography variant="h6">Ethical Tools and Frameworks</Typography>
          <Typography paragraph>
            We provide conceptual frameworks, case studies, and professional exercises to build robust ethical practices in tech environments.
          </Typography>
        </CardContent>
      </Card>
    </div>
    );
}

export default DefineEthics;

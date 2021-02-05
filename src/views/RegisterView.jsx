import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
       width: '25ch',
       display: 'flex',
       flexDirection: 'column',
       marginBottom: 15,
    },
  },
}));

const divStyles = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  marginBottom: 20,
  paddingBottom: 20,
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.addUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');

     if (name === '' || email === '' || password === '') {
            return alert('Please fill in the required fields!');
        };
  };

  return (
    <div style={divStyles}>
      <h1 style={{color: 'red'}}>Please log on</h1>

      <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
            <div>
        <TextField
          id="name"
          label="Name"
          value={name}
          name="name"
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        /> 
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={handleChange}
          color="secondary"
          />
           <TextField
          id="password"
          label="Password"
          variant="outlined"
          name="password"
          value={password}
          onChange={handleChange}
          color="secondary"
                  />
              </div>

<Button type="submit" variant="contained" color="secondary">Sign up</Button>
      </form>
    </div>
  );
}
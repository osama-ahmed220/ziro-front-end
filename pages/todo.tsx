import { FunctionComponent, useState, FormEvent, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Send, Delete, Done } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
import Container from '@material-ui/core/Container';
import { FormControl, InputLabel, Input, InputAdornment, Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core';

interface IToDoProps {
}

interface TodoInterface {
  text: string;
  isCompleted: boolean;
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    "flex-wrap": 'wrap',
    marginBottom: theme.spacing(10)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  item: {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  todoTitle: {
    textDecoration: 'line-through'
  },
}));

const ToDo: FunctionComponent<IToDoProps> = (_) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) return;
    setTodos([...todos, { text: value, isCompleted: false }]);
    setValue("");
  };
  return <Layout>
    <Container>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl className={classes.textField} fullWidth>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e: MouseEvent) => {
                    handleSubmit(e);
                  }}
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      {todos.length > 0 && <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12} md={6}>
          <List>
            {todos.map(({ text, isCompleted }, i) => <ListItem key={i} className={classes.item}>
              <ListItemText
                primary={text}
                className={isCompleted ? classes.todoTitle : ''}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => {
                  todos[i].isCompleted = true;
                  setTodos([...todos]);
                }}>
                  <Done htmlColor="white" />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => {
                  const newTodos = [...todos];
                  newTodos.splice(i, 1);
                  setTodos(newTodos);
                }}>
                  <Delete htmlColor="white" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)}
          </List>
        </Grid>
        <Button variant="contained" color="primary" onClick={() => {
          // get all users here and send it to someone.
        }}>
          Save & Share
        </Button>
      </Grid>}
    </Container>
  </Layout>;
};

export default ToDo;

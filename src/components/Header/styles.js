import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
  body: {
    border: "0",
    margin: "0",
    padding: "0",
    fontFamily: "sans-serif",
    backgroundColor: "rgba(250, 250, 250)"
  },
  ".container": {
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    flexDirection: "row"
  },
  ".container div > p span": { color: "red" },
  p: { position: "relative", top: "30px" },
  "p a": { color: "black", textDecoration: "none" },
  button: {
    cursor: "pointer",
    border: "0",
    borderRadius: "4px",
    fontWeight: 600,
    margin: "0 10px",
    width: "200px",
    padding: "10px 0",
    boxShadow: "0 0 20px rgba(104, 85, 224, 0.2)",
    transition: "0.4s"
  },
  ".reg": { color: "white", backgroundColor: "rgba(104, 85, 224, 1)" },
  ".log": {
    color: "rgb(104, 85, 224)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(104, 85, 224, 1)"
  },
  "button:hover": {
    color: "white",
    width: "",
    boxShadow: "0 0 20px rgba(104, 85, 224, 0.6)",
    backgroundColor: "rgba(104, 85, 224, 1)"
  }
}));
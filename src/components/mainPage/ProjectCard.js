import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalComponent from './Modal';
import ModalImage from './ModalImage';

const useStyles = (theme) =>({
  root: {
    maxWidth: '360px',
    backgroundColor: '#111111',
    opacity: '0.9',
    border: 'solid 3px rgb(228, 130, 74)',
    height: 'auto',
    width: 'auto',
    margin: '0 auto',
    padding: '6px',
    '&:hover': {
        borderRadius: '3%',
        opacity: '1'
    },
    
    
  },

 

  typographyStyles:{
      color: '#567CAA',
      marginTop: '30px',
      fontSize: '22px',
      textAlign: 'left',
      wordWrap: 'break-word',
      fontFamily: 'roboto'
  },

  title:{
    margin: '0 auto',
    textAlign: 'center',
    color: 'rgb(228, 130, 74)',
    fontSize: '30px',
    fontFamily: 'roboto'

  },

  examples: {
    width: '100%',
    fontSize: '20px',
    textAlign: 'left'
  },

  titleContainer:{
    borderBottom: 'solid 2px rgb(228, 130, 74)'
  },

  links:{
      color: "#567CAA",
      fontSize: '18px',
      fontWeight: '500',
      fontFamily: 'roboto',
      "&:hover": {
          textDecoration: 'underline',
          color: 'rgb(228, 130, 74)'
      },
  },

  edabit:{
    opacity:'0.9',
    color: 'rgb(228, 130, 74)',
    "&:hover":{
      opacity: '1.0',
    }
  },

  sourceLink:{
    paddingBottom: '0px',
    textDecoration: 'none',
    color: '#567CAA',
    fontSize: '18px',
    fontFamily: 'roboto',
    textTransform: 'uppercase',
    fontWeight: '500',
    '&:hover':{
      textDecoration: 'underline',
      color: 'rgb(228, 130, 74)'
    }
    
  },

  

});

class ProjectCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      open: false,
      over: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);

  }

  handleClick () {
    if(this.state.open === false){
      this.setState({
        open: true
      })
    }
    else{
      this.setState({
        open: false
      })
    }
  }

  handleImageClick () {
    if(this.state.over === false){
      this.setState({
        over: true
      })
    }
    else{
      this.setState({
        over: false
      })
    }
  }

  

  render(){
   
  const { classes } = this.props;
  const {title, imageUrl, description, edabit, gifUrl, sourceLink} = this.props.projectObj;
    return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia

            component='img'
            alt='image supposed to be here'
            height="250px"
            image= {imageUrl}
            title='click to enlarge.'
            onClick={this.handleImageClick}
          />
          <CardContent>
            <div className={classes.titleContainer}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {title}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typographyStyles}>
              {description}
            </Typography>
            <Typography className={classes.typographyStyles}>
              {edabit? <a  rel="noopener noreferrer" target="_blank" className={classes.edabit} href={edabit}>{edabit}</a>: ''}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
          <Button size="small" color="primary" className={classes.links} onClick={this.handleClick}>
            Preview
          </Button>
          <a href={sourceLink} rel="noopener noreferrer" target="_blank" className={classes.sourceLink}>
              Source Code
          </a>
        </CardActions>
      </Card>
      <ModalImage over={this.state.over} onClick={this.handleImageClick} title={title} image={imageUrl}/>
      <ModalComponent open={this.state.open} onClick={this.handleClick} title={title} gifUrl={gifUrl}/>
    </div>
    )
  };
}

export default withStyles(useStyles)(ProjectCard);


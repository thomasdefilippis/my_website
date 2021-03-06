import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Hidden } from '@material-ui/core';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const useStyles = (theme) => ({
    root:{
        '& label.Mui-focused': {
            color: 'rgb(228, 130, 74)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(228, 130, 74)',
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'rgb(228, 130, 74)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(228, 130, 74)',
            },
          },
    },

    typographyStyles:{
        marginBottom: '100px',
        
    },

    header:{
        fontSize:'50px',

    },

    description: {
        backgroundColor: '#111111',
        width: 'auto',
        height: 'auto',
        marginTop: '50px',
        paddingLeft: '0px',
        color: 'rgb(228, 130, 74)',
        fontFamily: 'roboto',
        fontSize: '40px',

        
    },

    textField:{
            backgroundColor: 'white',
            width: 'auto',
            marginBottom: '20px',
    },

    message:{
        backgroundColor: 'white',
        width: '87%',
        borderRadius: '1%'
    },

    paragraph:{
        fontSize: '20px',

    },

    emailLink:{
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'rgb(228, 130, 74)',
        '&:hover':{
            opacity: '0.7'
        }
    },

    submit:{
        color: "#111111",
        marginLeft: '30px',
        width: '150px',
        height: '40px',
        marginTop: '25px',
        cursor: 'pointer',
        backgroundColor: 'rgb(228, 130, 74)',
        fontSize: '30px',
        fontFamily: 'roboto',
        fontWeight: 'bold',
        borderRadius: '3%',
        border: 'none',
        opacity: '1',
        '&:hover': {
            background: '#567CAA'
        }
    }
});

class Form extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        name: '',
        email: '',
        message: ''
      }
      this.nameChange = this.nameChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.messageChange = this.messageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.sendFeedback = this.sendFeedback.bind(this);
      this.validate = this.validate.bind(this);

    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    emailChange = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    messageChange = (event) =>{
        
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('hey')
        const templateId = 'contact';
        if(this.validate(this.state.email)){
            if(this.state.name !== '' && this.state.message !== ''){
                this.sendFeedback(templateId, {
                    message: this.state.message,
                    name: this.state.name,
                    email: this.state.email
                })
            }else{
                Swal.fire({
                    title: 'Invalid entry: you must enter something into each box',
                    icon: 'error',
                    confirmButtonColor: 'rgb(228, 130, 74)',
                })
            }
        }else{
            Swal.fire({
                title: 'Invalid email',
                icon: 'error',
                confirmButtonColor: 'rgb(228, 130, 74)',
                
            })
        }
    }
    
    validate(email) {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
        return expression.test(String(email).toLowerCase())
    }

    sendFeedback = (templateId, variables) => {
        emailjs.send(
          'gmail', templateId,
          variables, 'user_R2I7ggXxSgNXKq2olqxFm'
          ).then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success',
              confirmButtonColor: 'rgb(228, 130, 74)',
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error',
              confirmButtonColor: 'rgb(228, 130, 74)',
            })
            console.error('Email Error:', err)
          })
    }

    render(){
    const { classes } = this.props;
    return (
        <div className={classes.description}>
            <Hidden xsDown>
                <div className={classes.typographyStyles}>
                        <h1 className={classes.header}>Get in touch</h1>
                        <p className={classes.paragraph}>If you want to get in touch, fill out the form below or send an email to <a className={classes.emailLink} href="mailto:thomasdefilippis@gmail.com?subject=Portfolio">thomasdefilippis@gmail.com</a></p>
                </div>
            </Hidden>
            <Hidden smUp>
                <div className={classes.typographyStyles} style={{textAlign:'center'}}>
                        <h1 className={classes.header}>Get in touch</h1>
                        <p className={classes.paragraph}>If you want to get in touch, fill out the form below or send an email to <a className={classes.emailLink} href="mailto:thomasdefilippis@gmail.com?subject=Portfolio">thomasdefilippis@gmail.com</a></p>
                </div>
            </Hidden>
            <Hidden xsDown>
                <form noValidate className={classes.root} autoComplete="off">
                    <TextField 
                        id="outlined-basic" 
                        label="Full Name" 
                        variant="outlined" 
                        InputProps={{
                            className: classes.textField
                        }}
                        onChange={this.nameChange}
                        required
                    />
                    <br></br>
                    <TextField 
                        id="outlined-basic" 
                        label="e-mail" 
                        variant="outlined" 
                        InputProps={{
                            className: classes.textField
                        }}
                        required
                        onChange={this.emailChange}
                    />
                    <br></br>
                    <TextField 
                        id="outlined-basic" 
                        label="Message" 
                        variant="outlined" 
                        multiline={true}
                        rows={12} 
                        className={classes.message}
                        animate={false}
                        onChange={this.messageChange}
                    />
                    <br></br>
                    <input type="submit" value="Send" className={classes.submit} onClick={this.handleSubmit}/>
                </form>
            </Hidden>
            <Hidden smUp>
                <form noValidate className={classes.root} autoComplete="off" style={{textAlign: 'center'}}>
                    <TextField 
                        id="outlined-basic" 
                        label="Full Name" 
                        variant="outlined" 
                        InputProps={{
                            className: classes.textField
                        }}
                        onChange={this.nameChange}
                        required
                    />
                    <br></br>
                    <TextField 
                        id="outlined-basic" 
                        label="e-mail" 
                        variant="outlined" 
                        InputProps={{
                            className: classes.textField
                        }}
                        required
                        onChange={this.emailChange}
                    />
                    <br></br>
                    <TextField 
                        id="outlined-basic" 
                        label="Message" 
                        variant="outlined" 
                        multiline={true}
                        rows={12} 
                        className={classes.message}
                        animate={false}
                        onChange={this.messageChange}
                    />
                    <br></br>
                    <input type="submit" value="Send" className={classes.submit} onClick={this.handleSubmit} style={{marginLeft:'0px'}}/>
                </form>
            </Hidden>
        </div>
     )
    }
}

export default withStyles(useStyles)(Form);

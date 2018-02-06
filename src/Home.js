import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import * as images from './img'
import classNames from 'classnames'
import Typography from 'material-ui/Typography/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 300,
    width: 300,
    padding: theme.spacing.unit,
    textAlign: 'center'
  },
  control: {
    padding: theme.spacing.unit
  },
  avatar: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

const breweries = [
  {
    title: 'Brauerei BAF',
    logo: images.baf,
    link: 'https://www.facebook.com/BrauereiBAF/'
  },
  {
    title: 'Bierwerkstatt Eberhard',
    logo: images.eberhard,
    link: 'https://www.bierwerkstatt.be/'
  },
  {
    title: 'Les Garçons',
    logo: images.garcons,
    link: 'http://www.les-garcons.com/'
  },
  {
    title: 'Fjord & Fiell Nano Brewery',
    logo: images.fjordfjell,
    link: 'https://www.facebook.com/fjordandfjell/'
  }
]

const Brewery = ({ brewery, classes }) => (
  <Grid key={brewery.link} item>
    <Paper className={classes.paper}>
      <a
        href={brewery.link}
        target='_blank'
        title={brewery.title}
        >
        <img
          alt={brewery.title}
          src={brewery.logo}
          className={classNames(classes.avatar)}
        />
      </a>
    </Paper>
  </Grid>
)

class GuttersGrid extends React.Component {
  constructor () {
    super()
    this.state = {
      spacing: '16'
    }
  }

  render () {
    const { classes } = this.props
    const { spacing } = this.state

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={Number(spacing)} className={classes.control} >
            <Typography variant='headline' component='h1'>
              Berner Bier Kollektiv
            </Typography>
          </Grid>
          <Grid container justify='center' spacing={Number(spacing)} className={classes.control} >
            {breweries.slice(0, 2).map(brewery => (
              <Brewery brewery={brewery} classes={classes} />
            ))}
          </Grid>
          <Grid container justify='center' spacing={Number(spacing)}>
            {breweries.slice(2).map(brewery => (
              <Brewery brewery={brewery} classes={classes} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)

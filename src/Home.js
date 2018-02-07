import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import * as images from './img'
import classNames from 'classnames'
import Typography from 'material-ui/Typography/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  head: {
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    color: 'rgba(255,255,255,.9)',
    textAlign: 'center',
    textShadow: '0 0 5px black, 0 0 15px black, 0 0 25px black, 0 0 35px black, 0 0 45px black'
  },
  paper: {
    height: 280,
    width: 280,
    padding: theme.spacing.unit,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,.85)'
  },
  control: {
    padding: theme.spacing.unit / 2
  },
  image: {
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
    title: 'Fjord & Fiell Nano Brewery',
    logo: images.fjordfjell,
    link: 'https://www.facebook.com/fjordandfjell/'
  },
  {
    title: 'Les Garçons',
    logo: images.garcons,
    link: 'https://www.facebook.com/brasserielesgarcons/'
  },
  {
    title: 'Lorraine Beer Project',
    logo: images.lbp,
    link: 'https://www.lorrainebeerproject.ch/'
  }
]

const Brewery = ({ brewery, classes }) => (
  <Grid item>
    <Paper className={classes.paper}>
      <a
        href={brewery.link}
        target='_blank'
        title={brewery.title}
        >
        <img
          alt={brewery.title}
          src={brewery.logo}
          className={classNames(classes.image)}
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
            <Typography variant='display3' component='h1' className={classes.head}>
              Berner Bier&nbsp;Kollektiv
            </Typography>
          </Grid>
          <Grid container justify='center' spacing={Number(spacing)} className={classes.control} >
            {breweries.slice(0, 2).map(brewery => (
              <Brewery
                key={brewery.link}
                brewery={brewery}
                classes={classes}
              />
            ))}
          </Grid>
          <Grid container justify='center' spacing={Number(spacing)} className={classes.control}>
            {breweries.slice(2).map(brewery => (
              <Brewery
                key={brewery.link}
                brewery={brewery}
                classes={classes}
              />
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

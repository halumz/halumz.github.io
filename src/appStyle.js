export default theme => ({
  app: theme.mixins.gutters({
    position: 'relative',
    background: '#EFEFEF',
    paddingBottom: '20px'
  }),
  downloadPdf: theme.mixins.gutters({
    position: 'absolute',
    bottom: 10,
    right: 10
  }),
  title: theme.mixins.gutters({
    padding: 10
  }),
  papper: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 3
  }),
  papperHeader: theme.mixins.gutters({
    marginBottom: theme.spacing.unit * 3,
    background: '#F7F7F7'
  }),
  subPaper: theme.mixins.gutters({
    padding: 5,
    margin: 15,
    background: '#F7F7F7'
  }),
  attributeBody: theme.mixins.gutters({
    marginTop: 5,
    marginBottom: 5
  }),
  aboutMe: theme.mixins.gutters({}),
  portfolio: theme.mixins.gutters({}),
  workWxperience: theme.mixins.gutters({}),
  externalLinks: theme.mixins.gutters({
    display: 'flex',
    justifyContent: 'center'
  })
});

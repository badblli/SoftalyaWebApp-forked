// @mui
import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// components
// import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

// const IconWrapperStyle = styled('div')(({ theme }) => ({
//     margin: 'auto',
//     display: 'flex',
//     borderRadius: '50%',
//     alignItems: 'center',
//     width: theme.spacing(8),
//     height: theme.spacing(8),
//     justifyContent: 'center',
//     marginBottom: theme.spacing(3),
// }));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
          color: PropTypes.string,
          icon: PropTypes.string,
          title: PropTypes.string.isRequired,
          total: PropTypes.number.isRequired,
          sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, sx, ...other }) {
          return (
                    <Card
                              sx={{
                                        py: 5,
                                        boxShadow: 2,
                                        textAlign: 'center',
                                        color: 'text.secondary',
                                        opacity: 0.72,
                                        ...sx,
                              }}
                              {...other}
                    >

                              <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                                        {title}
                              </Typography>
                    </Card>
          );
}
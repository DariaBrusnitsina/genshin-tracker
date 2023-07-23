import React from 'react'
// material-ui
import { Card, Grid, Typography } from '@mui/material'

// // chart data
// import TeamSidebar from './TeamSidebar';
// import SelectedTeamPanel from './SelectedTeamPanel';
// import { Box } from '@mui/system';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4
// }
// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TeamsDashboard: React.FC = () => {
  return (
    <>
      <Card>

          <Grid container>

            <Grid item xs={10} >
                <Grid item>
                <Typography variant="h1">Отряды</Typography>
                </Grid>

                <Grid item>
                  {/* {partyList.length === 0
                    ? <Typography variant="h4">Nothing</Typography>
                    : <TeamSidebar teams={partyList}/>
                  } */}
                </Grid>

                <Grid item>
                <h1>hi</h1>
                  {/* <Button onClick={handleOpen}>Добавить отряд</Button> */}
                </Grid>
            </Grid>

            <Grid item xs={9}>
            <h1>hi</h1>
            <h1>hi</h1>
              {/* {partyList.length === 0 ? <Typography variant="h4">Nothing</Typography> : <SelectedTeamPanel selectedTeam={partyList[selectedIndex]}>Some</SelectedTeamPanel>} */}
            </Grid>
          </Grid>

        </Card>
{/*
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            text
          </Typography>
        </Box>
      </Modal> */}
    </>
  )
}

export default TeamsDashboard

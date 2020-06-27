import React from "react";
import type { FC } from "react";
import type { MapToNormalContentProps } from "~/presenter/components/ecosystem/Me/util/type";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

type Props = ReturnType<MapToNormalContentProps>;

const useStyles = makeStyles({
  list_item_title: {
    width: "18%",
  },
});

export const Normal: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div data-testid="Normal">
      <Grid container direction="row" alignItems="center" spacing={5}>
        <Grid className={classes.list_item_title} item>
          <Typography variant="h6">名前</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{props.domain.me.name}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" spacing={5}>
        <Grid className={classes.list_item_title} item>
          <Typography variant="h6">住所</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{props.domain.me.address}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center" spacing={5}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={props.operations.reRender}
          >
            再取得
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

import React, { FC, Suspense } from "react";
import { selector } from "~/presenter/components/ecosystem/Me/util";
import { useReRender } from "~/presenter/hooks/useReRender";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";
import { Placeholder } from "./Placeholder";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    height: 300,
    maxWidth: 500,
  },

  title: {
    marginBottom: 15,
  },
});
export const Me: FC = () => {
  // このタイミングで`React.lazy`を実行する事で取得処理をスムーズに走らせる
  const Content = selector({
    useCase: {
      ...interactor({ repository }),
      ...useReRender(),
    },
  });
  const classes = useStyles();

  return (
    <Box m={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
            Profile
          </Typography>
          <hr />
          <Suspense fallback={<Placeholder />}>
            <Content />
          </Suspense>
        </CardContent>
      </Card>
    </Box>
  );
};

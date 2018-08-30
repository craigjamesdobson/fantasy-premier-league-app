export namespace GetStaticData {
  export async function getstaticData(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const staticDataUrl =
        './fplData.json';

      fetch(staticDataUrl)
        .then((data: Response) => {
          if (data.status !== 200) {
            // tslint:disable-next-line:no-console
            console.log(
              'Looks like there was a problem. Status Code: ' + data.status
            );
            return;
          }

          data.json().then((staticData: Response) => {
            resolve(staticData);
          });
        })
        .catch((err: Response) => {
          // tslint:disable-next-line:no-console
          console.log('Fetch Error :-S', err);
        });
    });
  }
}

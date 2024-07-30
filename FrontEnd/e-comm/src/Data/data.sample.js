export const dataSample=[
    { 
        imageUrl:
          ["https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"],

        brand: "FRELURO",
        title: "Men Printed Cotton Blend Straight Kurta",
        color: ["Yellow",],
        discountedPrice: 299,
        price: 999,
        discountPresent: 70,
        sizes: [
          {
            name: "S",
            quantity: 20,
          },
          {
            name: "M",
            quantity: 30,
          },
          {
            name: "L",
            quantity: 50,
          },
          {
            name: "XL",
            quantity: 20,
          },
        ],
        quantity: 120,
        topLevelCategory: "men",
        secondLevelCategory: "clothing",
        thirdLevelCategory: "mens_kurta",
        description:
          ["This Trendy And Attractive Men's Pathani kurta And Look Stylish Effortlessly. Made To Accentuate Any Body Type, It Will Give You That Extra Oomph And Make You Stand Out Wherever You Are. This kurta Is Ideal For The Party,Ocassional,Festive,Evening, Valentines Day, Birthday, casual, Etc.The Kurta Is Made Of Standard Fabric Material Which Feels Very Smooth On Skin.. It features Full sleeve, Shirt Collar.Festival/Casual wear Men's Cotton fabric kurta with long sleeves and Cut away collar that you pair with pajama,churidar,jeans.",],
        Highlight:[
            "Printed Cotton Blend Fabric",
            "Full Sleeve",
            "half Collar",
            "Casual Wear",
          ]
      },
]



REGION=us-east4


gcloud services enable run.googleapis.com
export PROJECT_ID=$(gcloud config list --format 'value(core.project)')
gcloud config set compute/region $REGION

mkdir ~/hello-https && cd $_
touch index.js && touch package.json

tee -a index.js <<EOF
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);
};
EOF


tee -a package.json <<EOF
{
  "name": "sample-http",
  "version": "0.0.1"
}
EOF



gcloud functions deploy GCFunction \
  --gen2 \
  --runtime nodejs18 \
  --entry-point helloWorld \
  --source . \
  --region $REGION \
  --trigger-http \
  --timeout 540s \
  --allow-unauthenticated \
  --max-instances 5
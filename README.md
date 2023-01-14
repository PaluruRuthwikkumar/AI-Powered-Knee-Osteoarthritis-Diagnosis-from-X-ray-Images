# Knee Osteoarthritis Analysis with X-ray Images using Deep Convolutional Neural Networks

This code repository is the final project of the Complex Data Mining course at Unicamp (MDC013).

[Knee osteoarthritis](https://en.wikipedia.org/wiki/Knee_arthritis) is a pathology that occurs due to wear on the cartilage that protects the bones in this region from friction and impacts.

To identify this pathology, some medical procedures are necessary, such as **X-rays** or magnetic resonance imaging, in which it is possible to assess the loss in joint spacing, thus indicating the severity of the disease.

The severity of osteoarthritis was classified into 5 levels based on [KL score](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4925407/), from the normal level to the severe level, where the greater the degree of severity, the smaller the spacing of the joint.

- KL score:
    - Grade 0: Healthy
    - Grade 1: Doubtful 
    - Grade 2: Minimal 
    - Grade 3: Moderate 
    - Grade 4: Severe 

## Objective

The objective of this project is to correctly classify the degree of osteoarthritis based on X-ray images.

![streamlit app - knee_dl_app](assets/streamlit_knee_ss.png)

## Project Structure

```shell
.
├── README.md
├── app
│   ├── app.py
│   └── img
├── assets
├── dataset
│   ├── test
│   ├── train
│   └── val
├── environment.yml
└── src
    ├── 01_data_preparation.ipynb
    ├── 02_ensemble_models.ipynb
    ├── 02_model_inception_resnet_v2.ipynb
    ├── 02_model_resnet50.ipynb
    ├── 02_model_xception.ipynb
    ├── 03_best_model_on_test_xception.ipynb
    └── models
        └── model_Xception_ft.hdf5
```

## Project Setup

How does the Web App to **predict** knee osteoarthritis grade using **Deep
Learning** and **Streamlit** works?

### Clone this repository

```shell
(base)$: git clone git@github.com:mafda/knee_OA_dl_app.git
(base)$: cd knee_OA_dl_app
```

### Configure environment

- Create the conda environment

    ```shell
    (base)$: conda env create -f environment.yml
    ```

- Activate the environment

    ```shell
    (base)$: conda activate knee_dl_app
    ```

- Download `model_Xception_ft.hdf5` model from
   [here](https://drive.google.com/file/d/1vPS_j2AW3M1W8GydREEDw6CDENSgVwCy/view?usp=share_link)
   to run the application. Create `models` folder and copy the model here.

    ```shell
    (knee_dl_app)$: mkdir src/models
    ```

- Download the dataset from [Knee Osteoarthritis Dataset with Severity
   Grading](https://www.kaggle.com/datasets/shashwatwork/knee-osteoarthritis-dataset-with-severity)
   to train the model and test the application. Create `dataset` folder and copy the data
   here.

    ```shell
    (knee_dl_app)$: mkdir dataset
    ```

- Run it:

    ```shell
    (knee_dl_app)$: streamlit run app/app.py
    ```

    As soon as you run the script, a local Streamlit server will spin up, and
    your app will open in a new tab in your default web browser.

    Or you can navigate to `http://localhost:8501`.

### Results Knee OA Deep Learning App

![streamlit app - knee_dl_app](assets/streamlit_knee_low.gif)

## Methodology

The following methodology has been proposed to correctly classify the degree of osteoarthritis based on X-ray images:

1. Data preparation
2. Model training
3. Model evaluation
4. Web application development with the best model

### Data preparation
### Model training
### Model evaluation
### Web application development with the best model


## References

- [Complex data mining](https://www.ic.unicamp.br/~mdc/) at
  [unicamp](https://www.unicamp.br/unicamp/).
- [Knee Osteoarthritis Dataset with Severity
  Grading](https://www.kaggle.com/datasets/shashwatwork/knee-osteoarthritis-dataset-with-severity)

---

made with 💙 by [mafda](https://mafda.github.io/)

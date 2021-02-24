import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import CodeEditor from '../../codeEditor';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import QuizOptionConfig from '../quizOptionConfig';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { storage } from '../../../../core/firebase/base';

import './index.scss';

const questionType  = {
    img: '1',
    text: '2'
};

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        width: '100%',
      },
    },
}));

const QuizListItem = ({questions, setQuestions}) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [questionDataType, setQuestionDataType] = useState(questionType.text);
    const [optionType, setOptionType] = useState(1);
    const [optionCount, setOptionCount] = useState(4);
    const [image, setImage] = useState(null);

    const [valueImg, setImgValue] = useState('');

    console.log(valueImg, 'valueImg')
    const handleChangeAnswer = (quizIndex, optionIndex, e) => {
        const { value } = e.target;

        const answerList = [...questions[quizIndex].answerList];
        answerList[optionIndex] = value;
        const questionsModel = [...questions];
        questionsModel[quizIndex].answerList = answerList;
        setQuestions([...questionsModel])
    };

    const handleSetImgSrc = (quizIndex) => {
        const quizData = [...questions];
        quizData[quizIndex].questionData = valueImg;
        setQuestions([...quizData]);
    };

    const handleFileInputChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    };

    const handleSetText = (value, quizIndex) => {
        const quizData = [...questions];
        quizData[quizIndex].questionData = value;
        setQuestions([...quizData])
    };

    const handleDeleteQuiz = quizIndex => {
        const questionsData = [...questions];
        if(questionsData .length > 1) {
            questionsData.splice(quizIndex, 1);
            setQuestions([...questionsData])
        };
    };

    const handlePushCorrectAnswer = (quizIndex, optionArrayIndex) => {
        const questionsData = questions;
        questionsData[quizIndex].correct_answer = [...optionArrayIndex];
        setQuestions([...questionsData])      
    };

    const handleCopy = quizIndex => {
        const questionsData = [...questions];
        questionsData.splice(quizIndex, 0, {...questionsData[quizIndex]});
        setQuestions([...questionsData])
    };
    
    const handleChangeQuizDescription = (e, quizIndex) => {
        const { value } = e.target
        const quizData = [...questions];
        quizData[quizIndex].quizDescription = value;
        setQuestions([...quizData])
    }

    const handleChangeQuizComment = (e, quizIndex) => {
        const { value } = e.target
        const quizData = [...questions];
        quizData[quizIndex].comment = value;
        setQuestions([...quizData])
    }
    
    const handleSetOptionCount = (optionCount, quizIndex) => {
        setOptionCount(optionCount);
        const quizData = [...questions];
        quizData[quizIndex].answerList = Array.from({length: optionCount}, () => '')
    };

    const handleSetImgUrl = imgUrl => {
        console.log(123456789)
        setImgValue(imgUrl);
    };

    useEffect(() => {
        if(image !== null) {
            setLoading(true);
            const uploadImg = storage.ref(`images/${image.name}`).put(image);
            uploadImg.on(
                'state_changed',
                snapshot => {},
                error => {
                    console.log('error')
                },
                () => {
                    storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(handleSetImgUrl);
                    setLoading(false);
                }
            )
        }
    }, [image]);

    const questionDataModel = {
        [questionType.img]: (quizIndex) => (
            <div className="upload_img_content">
                <input 
                    type="file"
                    id={'imgUploadContent'}
                    onChange={handleFileInputChange}
                />


                    <div>
                        <label for="imgUploadContent">
                            {
                                loading ? (
                                    <div>
                                        loading...
                                    </div>
                                ): (
                                    <div>
                                        <span>Upload Img</span>
                                        <CloudUploadIcon />
                                    </div>
                                )
                            }
                        </label>

                        <Button 
                            variant="contained"
                            onClick={() => handleSetImgSrc(quizIndex)}
                        >
                            Save image 
                        </Button>
                    </div>
            </div>
        ),

        [questionType.text] : (quizIndex) => (
            <TextField 
                id="outlined-basic" 
                label="Text" 
                variant="outlined"
                multiline
                value={questions[quizIndex].questionData}
                rows={2}
                onChange={e => handleSetText(e.target.value, quizIndex)}
            />
        )
    };

    return (
        <div className="create_content">
            
            {
                    questions.map((quiz, quizIndex) => {
                        return (
                            <div className="create_quiz_content">

                                <span className="section_number_info">
                                   Section {quizIndex + 1}
                                </span>

                                <span className="remove_quiz_content">
                                    <Tooltip title="Duplicate" onClick={() => handleCopy(quizIndex)}>
                                        <IconButton aria-label="copy">
                                            <FileCopyIcon />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="Delete" onClick={() => handleDeleteQuiz(quizIndex)}>
                                        <IconButton aria-label="delete" disabled={questions.length === 1}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </span>

                                <div className="top_content">
                                </div>
                                <form className={classes.root} noValidate autoComplete="off" >
                               
                               <div className="question_data_type_content">
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Question Data Type</FormLabel>
                                            <RadioGroup row aria-label="position" name="position" defaultValue={questionDataType} onChange={(e) => {
                                                setQuestionDataType(e.target.value)
                                            }}>
                                                <FormControlLabel
                                                    value={questionType.img}
                                                    control={<Radio color="primary" />}
                                                    label="Img"
                                                />

                                                <FormControlLabel
                                                    value={questionType.text}
                                                    control={<Radio color="primary" />}
                                                    label="Text"
                                                />

                                            </RadioGroup>
                                    </FormControl>

                                    
                                    <div className="question_data">
                                        { questionDataModel[questionDataType](quizIndex) }
                                    </div>

                               </div>

                                <div>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Quiz Description"
                                        multiline
                                        rows={2}
                                        variant="outlined"
                                        value={quiz.quizDescription}
                                        onChange={e => handleChangeQuizDescription(e, quizIndex)}
                                    />
                                </div>

                                <div style={{marginTop: '15px'}}>
                                    <TextField 
                                        id="outlined-multiline-static"
                                        label="Quiz Comment"
                                        multiline
                                        rows={2}
                                        variant="outlined"
                                        value={quiz.comment}
                                        onChange={e => handleChangeQuizComment(e, quizIndex)}
                                    />
                                </div>

                                <div className="untitled_question_content">
                                    <QuizOptionConfig 
                                        optionCount={optionCount}
                                        optionType={optionType}
                                        setOptionType={setOptionType}
                                        options={quiz.answerList}
                                        quizIndex={quizIndex}
                                        setOptionCount={handleSetOptionCount}
                                        answerListCount={questions[quizIndex].answerList.length}
                                        handlePushCorrectAnswer={handlePushCorrectAnswer}
                                        correctAnswer={questions[quizIndex].correct_answer}
                                    />
                                    {
                                        quiz.answerList.map((item, optionIndex) => {
                                          return (
                                            <div className="option_list">
                                                <div>
                                                    <TextField 
                                                        id="standard-basic" 
                                                        label={`Option ${optionIndex + 1}`}
                                                        value={quiz.answerList[optionIndex]}
                                                        onChange={e => handleChangeAnswer(quizIndex, optionIndex, e)}
                                                    />
                                                </div>
                                            </div>
                                          )  
                                        })
                                    }
                                    
                                </div>
                            </form>
                            </div>
                        )
                    })
                }
        </div>
    )
};

export default QuizListItem;
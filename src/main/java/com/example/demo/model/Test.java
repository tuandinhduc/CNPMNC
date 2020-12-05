package com.example.demo.model;

public class Test {

    private int Id;
    private String QuestionId;
    private String Content;
    private boolean IsCorrect;

    public Test() {
        super();
    }

    public Test(int id, String questionId, String content, boolean isCorrect) {
        super();
        Id = id;
        QuestionId = questionId;
        Content = content;
        IsCorrect = isCorrect;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getQuestionId() {
        return QuestionId;
    }

    public void setQuestionId(String questionId) {
        QuestionId = questionId;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public boolean isCorrect() {
        return IsCorrect;
    }

    public void setCorrect(boolean correct) {
        IsCorrect = correct;
    }
}

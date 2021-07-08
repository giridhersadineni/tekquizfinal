
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 06/21/2021 09:48:14
-- Generated from EDMX file: C:\Users\smehanaaz\Desktop\final project\quizapi\Models\DBModels.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [quizdb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_AdminUserTopic]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Topics] DROP CONSTRAINT [FK_AdminUserTopic];
GO
IF OBJECT_ID(N'[dbo].[FK_AdminUserQuiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Quizs] DROP CONSTRAINT [FK_AdminUserQuiz];
GO
IF OBJECT_ID(N'[dbo].[FK_AdminUserQuestion]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Questions] DROP CONSTRAINT [FK_AdminUserQuestion];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizParticipant_Quiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizParticipant] DROP CONSTRAINT [FK_QuizParticipant_Quiz];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizParticipant_Participant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizParticipant] DROP CONSTRAINT [FK_QuizParticipant_Participant];
GO
IF OBJECT_ID(N'[dbo].[FK_TopicQuiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Quizs] DROP CONSTRAINT [FK_TopicQuiz];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizAttemptsParticipant_QuizAttempts]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizAttemptsParticipant] DROP CONSTRAINT [FK_QuizAttemptsParticipant_QuizAttempts];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizAttemptsParticipant_Participant]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizAttemptsParticipant] DROP CONSTRAINT [FK_QuizAttemptsParticipant_Participant];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizAttemptsQuiz]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[QuizAttempts] DROP CONSTRAINT [FK_QuizAttemptsQuiz];
GO
IF OBJECT_ID(N'[dbo].[FK_QuizQuestion]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Questions] DROP CONSTRAINT [FK_QuizQuestion];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Participants]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Participants];
GO
IF OBJECT_ID(N'[dbo].[Questions]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Questions];
GO
IF OBJECT_ID(N'[dbo].[Quizs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Quizs];
GO
IF OBJECT_ID(N'[dbo].[AdminUsers]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AdminUsers];
GO
IF OBJECT_ID(N'[dbo].[Topics]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Topics];
GO
IF OBJECT_ID(N'[dbo].[QuizAttempts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[QuizAttempts];
GO
IF OBJECT_ID(N'[dbo].[QuizParticipant]', 'U') IS NOT NULL
    DROP TABLE [dbo].[QuizParticipant];
GO
IF OBJECT_ID(N'[dbo].[QuizAttemptsParticipant]', 'U') IS NOT NULL
    DROP TABLE [dbo].[QuizAttemptsParticipant];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Participants'
CREATE TABLE [dbo].[Participants] (
    [ParticipantID] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NULL,
    [Email] varchar(50)  NULL,
    [Score] int  NULL,
    [TimeSpent] int  NULL,
    [Password] nvarchar(100)  NOT NULL,
    [QuizId] int  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- Creating table 'Questions'
CREATE TABLE [dbo].[Questions] (
    [QnID] int IDENTITY(1,1) NOT NULL,
    [Qn] varchar(250)  NULL,
    [ImageName] real  NULL,
    [Option1] varchar(50)  NULL,
    [Option2] varchar(50)  NULL,
    [Option3] varchar(50)  NULL,
    [Option4] varchar(50)  NULL,
    [Answer] bigint  NOT NULL,
    [topicId] bigint  NULL,
    [AdminUserId] int  NOT NULL,
    [QuizID] int  NOT NULL
);
GO

-- Creating table 'Quizs'
CREATE TABLE [dbo].[Quizs] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [AdminUserId] int  NOT NULL,
    [TopicId] int  NOT NULL
);
GO

-- Creating table 'AdminUsers'
CREATE TABLE [dbo].[AdminUsers] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [Phone] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Topics'
CREATE TABLE [dbo].[Topics] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [TopicName] nvarchar(max)  NOT NULL,
    [Subject] nvarchar(max)  NOT NULL,
    [AdminUserId] int  NOT NULL
);
GO

-- Creating table 'QuizAttempts'
CREATE TABLE [dbo].[QuizAttempts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Date] datetime  NULL,
    [QuizId] int  NOT NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [name] nvarchar(max)  NOT NULL,
    [email] nvarchar(max)  NOT NULL,
    [password] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'QuizParticipant'
CREATE TABLE [dbo].[QuizParticipant] (
    [Quizzes_Id] int  NOT NULL,
    [Participants_ParticipantID] int  NOT NULL
);
GO

-- Creating table 'QuizAttemptsParticipant'
CREATE TABLE [dbo].[QuizAttemptsParticipant] (
    [QuizAttempts_Id] int  NOT NULL,
    [Participants_ParticipantID] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [ParticipantID] in table 'Participants'
ALTER TABLE [dbo].[Participants]
ADD CONSTRAINT [PK_Participants]
    PRIMARY KEY CLUSTERED ([ParticipantID] ASC);
GO

-- Creating primary key on [QnID] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [PK_Questions]
    PRIMARY KEY CLUSTERED ([QnID] ASC);
GO

-- Creating primary key on [Id] in table 'Quizs'
ALTER TABLE [dbo].[Quizs]
ADD CONSTRAINT [PK_Quizs]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AdminUsers'
ALTER TABLE [dbo].[AdminUsers]
ADD CONSTRAINT [PK_AdminUsers]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Topics'
ALTER TABLE [dbo].[Topics]
ADD CONSTRAINT [PK_Topics]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'QuizAttempts'
ALTER TABLE [dbo].[QuizAttempts]
ADD CONSTRAINT [PK_QuizAttempts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Quizzes_Id], [Participants_ParticipantID] in table 'QuizParticipant'
ALTER TABLE [dbo].[QuizParticipant]
ADD CONSTRAINT [PK_QuizParticipant]
    PRIMARY KEY CLUSTERED ([Quizzes_Id], [Participants_ParticipantID] ASC);
GO

-- Creating primary key on [QuizAttempts_Id], [Participants_ParticipantID] in table 'QuizAttemptsParticipant'
ALTER TABLE [dbo].[QuizAttemptsParticipant]
ADD CONSTRAINT [PK_QuizAttemptsParticipant]
    PRIMARY KEY CLUSTERED ([QuizAttempts_Id], [Participants_ParticipantID] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [AdminUserId] in table 'Topics'
ALTER TABLE [dbo].[Topics]
ADD CONSTRAINT [FK_AdminUserTopic]
    FOREIGN KEY ([AdminUserId])
    REFERENCES [dbo].[AdminUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AdminUserTopic'
CREATE INDEX [IX_FK_AdminUserTopic]
ON [dbo].[Topics]
    ([AdminUserId]);
GO

-- Creating foreign key on [AdminUserId] in table 'Quizs'
ALTER TABLE [dbo].[Quizs]
ADD CONSTRAINT [FK_AdminUserQuiz]
    FOREIGN KEY ([AdminUserId])
    REFERENCES [dbo].[AdminUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AdminUserQuiz'
CREATE INDEX [IX_FK_AdminUserQuiz]
ON [dbo].[Quizs]
    ([AdminUserId]);
GO

-- Creating foreign key on [AdminUserId] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [FK_AdminUserQuestion]
    FOREIGN KEY ([AdminUserId])
    REFERENCES [dbo].[AdminUsers]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AdminUserQuestion'
CREATE INDEX [IX_FK_AdminUserQuestion]
ON [dbo].[Questions]
    ([AdminUserId]);
GO

-- Creating foreign key on [Quizzes_Id] in table 'QuizParticipant'
ALTER TABLE [dbo].[QuizParticipant]
ADD CONSTRAINT [FK_QuizParticipant_Quiz]
    FOREIGN KEY ([Quizzes_Id])
    REFERENCES [dbo].[Quizs]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Participants_ParticipantID] in table 'QuizParticipant'
ALTER TABLE [dbo].[QuizParticipant]
ADD CONSTRAINT [FK_QuizParticipant_Participant]
    FOREIGN KEY ([Participants_ParticipantID])
    REFERENCES [dbo].[Participants]
        ([ParticipantID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuizParticipant_Participant'
CREATE INDEX [IX_FK_QuizParticipant_Participant]
ON [dbo].[QuizParticipant]
    ([Participants_ParticipantID]);
GO

-- Creating foreign key on [TopicId] in table 'Quizs'
ALTER TABLE [dbo].[Quizs]
ADD CONSTRAINT [FK_TopicQuiz]
    FOREIGN KEY ([TopicId])
    REFERENCES [dbo].[Topics]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_TopicQuiz'
CREATE INDEX [IX_FK_TopicQuiz]
ON [dbo].[Quizs]
    ([TopicId]);
GO

-- Creating foreign key on [QuizAttempts_Id] in table 'QuizAttemptsParticipant'
ALTER TABLE [dbo].[QuizAttemptsParticipant]
ADD CONSTRAINT [FK_QuizAttemptsParticipant_QuizAttempts]
    FOREIGN KEY ([QuizAttempts_Id])
    REFERENCES [dbo].[QuizAttempts]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [Participants_ParticipantID] in table 'QuizAttemptsParticipant'
ALTER TABLE [dbo].[QuizAttemptsParticipant]
ADD CONSTRAINT [FK_QuizAttemptsParticipant_Participant]
    FOREIGN KEY ([Participants_ParticipantID])
    REFERENCES [dbo].[Participants]
        ([ParticipantID])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuizAttemptsParticipant_Participant'
CREATE INDEX [IX_FK_QuizAttemptsParticipant_Participant]
ON [dbo].[QuizAttemptsParticipant]
    ([Participants_ParticipantID]);
GO

-- Creating foreign key on [QuizId] in table 'QuizAttempts'
ALTER TABLE [dbo].[QuizAttempts]
ADD CONSTRAINT [FK_QuizAttemptsQuiz]
    FOREIGN KEY ([QuizId])
    REFERENCES [dbo].[Quizs]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuizAttemptsQuiz'
CREATE INDEX [IX_FK_QuizAttemptsQuiz]
ON [dbo].[QuizAttempts]
    ([QuizId]);
GO

-- Creating foreign key on [QuizID] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [FK_QuizQuestion]
    FOREIGN KEY ([QuizID])
    REFERENCES [dbo].[Quizs]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_QuizQuestion'
CREATE INDEX [IX_FK_QuizQuestion]
ON [dbo].[Questions]
    ([QuizID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
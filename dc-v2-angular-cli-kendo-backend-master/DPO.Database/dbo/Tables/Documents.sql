CREATE TABLE [dbo].[Documents] (
	[DocumentId]      UNIQUEIDENTIFIER NOT NULL,
    [DocumentTypeId]  INT NOT NULL,
	[FileName]		   NVARCHAR(255) NOT NULL,
    [CreatedOn]        DATETIME2          NOT NULL,
	[ModifiedOn]	   DATETIME2      NOT NULL,
    [Timestamp]        DATETIME2       NOT NULL, 
    CONSTRAINT [PK_DocumentId] PRIMARY KEY ([DocumentId]),
	CONSTRAINT [FK_Document_DocumentType_Document] FOREIGN KEY ([DocumentTypeId]) REFERENCES [DocumentTypes]([DocumentTypeId])
);

GO
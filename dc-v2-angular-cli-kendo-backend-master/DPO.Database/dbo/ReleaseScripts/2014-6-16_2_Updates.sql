/* Actioned local
/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/

step 1
rename N'dbo.ProductMarketTypes.SystemBasisDesignTypeId', N'Tmp_ProductMarketTypeId', 'COLUMN' 

rename N'dbo.ProjectOpenStatusTypes.BrandCompetitorTypeId', N'ProjectOpenStatusTypeId', 'COLUMN' 


update products
update projects
update project transfers


*/

#pragma checksum "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9ae0aee6734a76dff59ca97bb376782936cb1af9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\_ViewImports.cshtml"
using ClientScacchi;

#line default
#line hidden
#line 2 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\_ViewImports.cshtml"
using ClientScacchi.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9ae0aee6734a76dff59ca97bb376782936cb1af9", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"54f9ed7fe7a8e6a51809aecfcc5219a9383bd340", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/Actions.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 1 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
            BeginContext(45, 62, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9ae0aee6734a76dff59ca97bb376782936cb1af94261", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(107, 85, true);
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Welcome</h1>\r\n</div>\r\n<html>\r\n");
            EndContext();
            BeginContext(192, 98, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9ae0aee6734a76dff59ca97bb376782936cb1af95617", async() => {
                BeginContext(198, 85, true);
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <title>Chessboard using Pure CSS and HTML</title>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(290, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(292, 583, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9ae0aee6734a76dff59ca97bb376782936cb1af96888", async() => {
                BeginContext(298, 57, true);
                WriteLiteral("\r\n    <div id=\"board\" class=\"chessboard\" ; float:left\">\r\n");
                EndContext();
#line 15 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
          bool isWhite = false; 

#line default
#line hidden
                BeginContext(390, 2, true);
                WriteLiteral("\r\n");
                EndContext();
#line 17 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
         for (int i = 1; i < 9; i++)
        {
            isWhite = !isWhite;
            

#line default
#line hidden
#line 20 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
             for (int x = 1; x < 9; x++)
            {
                if (isWhite)
                {

#line default
#line hidden
                BeginContext(580, 42, true);
                WriteLiteral("                    <div class=\"box white\"");
                EndContext();
                BeginWriteAttribute("id", " id=\"", 622, "\"", 636, 4);
                WriteAttributeValue("", 627, "box-", 627, 4, true);
#line 24 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
WriteAttributeValue("", 631, i, 631, 2, false);

#line default
#line hidden
                WriteAttributeValue("", 633, "-", 633, 1, true);
#line 24 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
WriteAttributeValue("", 634, x, 634, 2, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(637, 9, true);
                WriteLiteral("></div>\r\n");
                EndContext();
#line 25 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
                }
                else
                {

#line default
#line hidden
                BeginContext(706, 42, true);
                WriteLiteral("                    <div class=\"box black\"");
                EndContext();
                BeginWriteAttribute("id", " id=\"", 748, "\"", 762, 4);
                WriteAttributeValue("", 753, "box-", 753, 4, true);
#line 28 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
WriteAttributeValue("", 757, i, 757, 2, false);

#line default
#line hidden
                WriteAttributeValue("", 759, "-", 759, 1, true);
#line 28 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
WriteAttributeValue("", 760, x, 760, 2, false);

#line default
#line hidden
                EndWriteAttribute();
                BeginContext(763, 9, true);
                WriteLiteral("></div>\r\n");
                EndContext();
#line 29 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
                }
                isWhite = !isWhite;
            }

#line default
#line hidden
#line 31 "C:\Users\Reykrot\Source\Repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
             

        }

#line default
#line hidden
                BeginContext(856, 12, true);
                WriteLiteral("    </div>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(875, 11, true);
            WriteLiteral("\r\n</html>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591

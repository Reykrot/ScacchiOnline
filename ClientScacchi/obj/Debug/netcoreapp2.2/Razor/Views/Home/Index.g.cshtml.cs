#pragma checksum "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e147970743b47a74f68357371cd5bd1c00988a01"
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
#line 1 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\_ViewImports.cshtml"
using ClientScacchi;

#line default
#line hidden
#line 2 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\_ViewImports.cshtml"
using ClientScacchi.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e147970743b47a74f68357371cd5bd1c00988a01", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"54f9ed7fe7a8e6a51809aecfcc5219a9383bd340", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<LogInInfo>
    {
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 2 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "LogIn";

#line default
#line hidden
            BeginContext(60, 83, true);
            WriteLiteral("<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Welcome</h1>\r\n</div>\r\n<html>\r\n");
            EndContext();
            BeginContext(143, 100, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e147970743b47a74f68357371cd5bd1c00988a013606", async() => {
                BeginContext(149, 87, true);
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <title>Chessboard using Pure CSS and HTML</title>\r\n\r\n");
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
            BeginContext(243, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(245, 1243, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e147970743b47a74f68357371cd5bd1c00988a014882", async() => {
                BeginContext(251, 9, true);
                WriteLiteral("\r\n   \r\n\r\n");
                EndContext();
#line 17 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
         using (Html.BeginForm("LogIn", "Home", FormMethod.Post))
        {

#line default
#line hidden
                BeginContext(338, 72, true);
                WriteLiteral("            <div class=\"form-group\">\r\n                <label for=\"Nome\">");
                EndContext();
                BeginContext(411, 22, false);
#line 20 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
                             Write(ViewData["Enter Name"]);

#line default
#line hidden
                EndContext();
                BeginContext(433, 26, true);
                WriteLiteral("</label>\r\n                ");
                EndContext();
                BeginContext(460, 77, false);
#line 21 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
           Write(Html.TextBoxFor(LogInInfo => LogInInfo.Name, new { @class = "form-control" }));

#line default
#line hidden
                EndContext();
                BeginContext(537, 2, true);
                WriteLiteral("\r\n");
                EndContext();
                BeginContext(655, 265, true);
                WriteLiteral(@"                <small id=""emailHelp"" class=""form-text text-muted"">We'll never share your Name with anyone else.</small>
            </div>
            <div class=""form-group"">
                <label for=""exampleInputPassword1"">Password</label>
                ");
                EndContext();
                BeginContext(921, 82, false);
#line 27 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"
           Write(Html.PasswordFor(LogInInfo => LogInInfo.Password, new { @class = "form-control" }));

#line default
#line hidden
                EndContext();
                BeginContext(1003, 4, true);
                WriteLiteral("\r\n\r\n");
                EndContext();
                BeginContext(1123, 330, true);
                WriteLiteral(@"            </div>
            <div class=""form-check"">
                <input type=""checkbox"" class=""form-check-input"" id=""exampleCheck1"">
                <label class=""form-check-label"" for=""exampleCheck1"">Check me out</label>
            </div>
            <button type=""submit"" class=""btn btn-primary"">Conferma</button>
");
                EndContext();
#line 36 "C:\Users\g.morleschi\source\repos\ScacchiOnline\ClientScacchi\Views\Home\Index.cshtml"

        }

#line default
#line hidden
                BeginContext(1466, 15, true);
                WriteLiteral("\r\n\r\n   \r\n    \r\n");
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
            BeginContext(1488, 11, true);
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<LogInInfo> Html { get; private set; }
    }
}
#pragma warning restore 1591

import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import GettingStated from './pages/GettingStated'
import PageNotFound from './pages/PageNotFound'
import Layout from './layout/Layout'
import Sandbox from './pages/Sandbox'
import Loading from './components/Loading'

const SwoodPerformance = lazy(() => import('./pages/Swood/SwoodPerformance'))
const SwoodRX = lazy(() => import('./pages/Swood/SwoodRX'))
const SwoodCompatibility = lazy(() => import('./pages/Swood/SwoodCompatibility'))
const ScriptParameters = lazy(() => import('./pages/Swood/ScriptParameters'))
const SwoodDataDirectory = lazy(() => import('./pages/Swood/SwoodDataDirectory'))
const SwoodTab = lazy(() => import('./pages/Swood/SwoodTab'))
const FileName = lazy(() => import('./pages/Swood/FileName'))
const AutoPanelDrawings = lazy(() => import('./pages/Swood/AutoPanelDrawings'))

// SwoodReport imports
const Swood = lazy(() => import('./pages/Swood/Swood'))
const SwoodReport = lazy(() => import('./pages/SwoodReport/SwoodReport'))
const SwoodReportQuickStart = lazy(() => import('./pages/SwoodReport/SwoodReportQuickStart'))
const SwoodLicensing = lazy(() => import('./pages/SwoodReport/SwoodLicensing'))
const ReportCompatibility = lazy(() => import('./pages/SwoodReport/ReportCompatibility'))
const SwoodReportMatrix = lazy(() => import('./pages/SwoodReport/SwoodReportMatrix'))
const SwoodReportPro = lazy(() => import('./pages/SwoodReport/SwoodReportPro'))
const SwoodReportProperties = lazy(() => import('./pages/SwoodReport/SwoodReportProperties'))
const MaterialExtendedProperties = lazy(() => import('./pages/SwoodReport/MaterialExtendedProperties'))
const ProjectName = lazy(() => import('./pages/SwoodReport/ProjectName'))
const ProjectQuantity = lazy(() => import('./pages/SwoodReport/ProjectQuantity'))
const SimpleReport = lazy(() => import('./pages/SwoodReport/SimpleReport'))
const DisplayComments = lazy(() => import('./pages/SwoodReport/DisplayComments'))
const EdgebandImage = lazy(() => import('./pages/SwoodReport/EdgebandImage'))
const MergeReports = lazy(() => import('./pages/SwoodReport/MergeReports'))
const PanelsAndStocks = lazy(() => import('./pages/SwoodReport/PanelsAndStocks'))
const CustomProperties = lazy(() => import('./pages/SwoodReport/CustomProperties'))
const ConcatenateProperties = lazy(() => import('./pages/SwoodReport/ConcatenateProperties'))
const Frames = lazy(() => import('./pages/SwoodReport/Frames'))
const FrameType = lazy(() => import('./pages/SwoodReport/FrameType'))
const CuttingPattern = lazy(() => import('./pages/SwoodReport/CuttingPattern'))
const NestedCuttingPattern = lazy(() => import('./pages/SwoodReport/NestedCuttingPattern'))
const Hardware = lazy(() => import('./pages/SwoodReport/Hardware'))
const HardwareLength = lazy(() => import('./pages/SwoodReport/HardwareLength'))
const HardwareType = lazy(() => import('./pages/SwoodReport/HardwareType'))
const BeamSaw = lazy(() => import('./pages/SwoodReport/BeamSaw'))
const SaveToPDF = lazy(() => import('./pages/SwoodReport/SaveToPDF'))
const Exclude = lazy(() => import('./pages/SwoodReport/Exclude'))
const MaterialType = lazy(() => import('./pages/SwoodReport/MaterialType'))
const SwoodReportReleaseNotes = lazy(() => import('./pages/SwoodReport/SwoodReportReleaseNotes'))
const SamplePage = lazy(() => import('./pages/SamplePages/SamplePage'))

// Swood Editor imports
const SwoodEditor = lazy(() => import('./pages/SwoodEditor/SwoodEditor'))
const SwoodEditorReleaseNotes = lazy(() => import('./pages/SwoodEditor/SwoodEditorReleaseNotes'))
const CreatingDATBackups = lazy(() => import('./pages/SwoodEditor/CreatingDATBackups'))

// SwoodUtils imports
const SwoodUtils = lazy(() => import('./pages/SwoodUtils/SwoodUtils'))
const SwoodUtilsReleaseNotes = lazy(() => import('./pages/SwoodUtils/SwoodUtilsReleaseNotes'))

// SwoodServer imports
const SwoodServer = lazy(() => import('./pages/SwoodServer/SwoodServer'))

// PostProcessors
const AddPostProcessor = lazy(() => import('./pages/PostProcessors/AddPostProcessor'))

const BabylonPage = lazy(() => import('./pages/BabylonPage'))

export const App = () => {
	return (
		<BrowserRouter basename="/SwoodDocs">
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} /> {/* Adding this to avoid image references issues like the christmas hat */}
					<Route path="/GettingStated" element={<GettingStated />} />
					<Route path="/index.html" element={<Home />} />
					<Route path="/Swood" element={<Swood />} />
					<Route path="/SwoodPerformance" element={<SwoodPerformance />} />
					<Route path="/SwoodRX" element={<SwoodRX />} />
					<Route path="/SwoodCompatibility" element={<SwoodCompatibility />} />
					<Route path="/ScriptParameters" element={<ScriptParameters />} />
					<Route path="/SwoodDataDirectory" element={<SwoodDataDirectory />} />
					<Route path="/SwoodTab" element={<SwoodTab />} />
					<Route path="/FileName" element={<FileName />} />
					<Route path="/AutoPanelDrawings" element={<AutoPanelDrawings />} />
					<Route path="/SwoodReport" element={<SwoodReport />} />
					<Route path="/SwoodReportQuickStart" element={<SwoodReportQuickStart />} />
					<Route path="/html/SwoodReportQuickstart.html" element={<SwoodReportQuickStart />} />
					<Route path="/SwoodLicensing" element={<SwoodLicensing />} />
					<Route path="/ReportCompatibility" element={<ReportCompatibility />} />
					<Route path="/SwoodReportReleaseNotes" element={<SwoodReportReleaseNotes />} />
					<Route path="/SwoodReportMatrix" element={<SwoodReportMatrix />} />
					<Route path="/SwoodReportPro" element={<SwoodReportPro />} />
					<Route path="/SwoodReportProperties" element={<SwoodReportProperties />} />
					<Route path="/MaterialExtendedProperties" element={<MaterialExtendedProperties />} />
					<Route path="/ProjectName" element={<ProjectName />} />
					<Route path="/ProjectQuantity" element={<ProjectQuantity />} />
					<Route path="/SimpleReport" element={<SimpleReport />} />
					<Route path="/DisplayComments" element={<DisplayComments />} />
					<Route path="/EdgebandImage" element={<EdgebandImage />} />
					<Route path="/MergeReports" element={<MergeReports />} />
					<Route path="/PanelsAndStocks" element={<PanelsAndStocks />} />
					<Route path="/CustomProperties" element={<CustomProperties />} />
					<Route path="/ConcatenateProperties" element={<ConcatenateProperties />} />
					<Route path="/Frames" element={<Frames />} />
					<Route path="/FrameType" element={<FrameType />} />
					<Route path="/CuttingPattern" element={<CuttingPattern />} />
					<Route path="/NestedCuttingPattern" element={<NestedCuttingPattern />} />
					<Route path="/Hardware" element={<Hardware />} />
					<Route path="/HardwareLength" element={<HardwareLength />} />
					<Route path="/HardwareType" element={<HardwareType />} />
					<Route path="/BeamSaw" element={<BeamSaw />} />
					<Route path="/SaveToPDF" element={<SaveToPDF />} />
					<Route path="/Exclude" element={<Exclude />} />
					<Route path="/MaterialType" element={<MaterialType />} />
					<Route path="/SwoodEditor" element={<SwoodEditor />} />
					<Route path="/SwoodEditorReleaseNotes" element={<SwoodEditorReleaseNotes />} />
					<Route path="/CreatingDATBackups" element={<CreatingDATBackups />} />
					<Route path="/SwoodUtils" element={<SwoodUtils />} />
					<Route path="/html/SwoodUtils.html" element={<SwoodUtils />} />
					<Route path="/SwoodUtilsReleaseNotes" element={<SwoodUtilsReleaseNotes />} />
					<Route path="/SwoodServer" element={<SwoodServer />} />
					<Route path="/AddPostProcessor" element={<AddPostProcessor />} />
					<Route path="/babylon" element={<BabylonPage />} />
					<Route path="/SamplePage" element={<SamplePage />} />
					<Route path="/Loading" element={<Loading />} />
				</Route>
				<Route path="/sandbox" element={<Sandbox />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
